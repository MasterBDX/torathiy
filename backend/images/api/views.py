import json

import numpy as np

import tensorflow as tf

from keras_preprocessing.image import load_img, img_to_array
from tensorflow import Graph
from keras.models import load_model
from keras import backend as K


from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.status import (HTTP_200_OK,
                                   HTTP_201_CREATED,
                                   HTTP_400_BAD_REQUEST)
from rest_framework.views import APIView

from django.core.files.storage import FileSystemStorage
from django.conf import settings
from .serializers import ImageSerializer
from images.models import UploadedImage

img_height, img_width = 180, 180

JOSN_IMAGE_CLASSES_PATH = settings.BASE_DIR / 'images/classification_model/image_classes.json'
MODEL = settings.BASE_DIR / 'images/classification_model/Model.h5'



with open(JOSN_IMAGE_CLASSES_PATH, 'r') as f:
    labelInfo = f.read()

labelInfo = json.loads(labelInfo)


model_graph = Graph()
with model_graph.as_default():
    tf_session = tf.compat.v1.Session()
    tf_session.run(tf.compat.v1.global_variables_initializer())
    with tf_session.as_default():
        model = load_model(MODEL)



K.set_session(tf_session)
K.set_learning_phase(0)


class AntiquesDataFetchAPIView(APIView):
    serializer_class = ImageSerializer
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            image = serializer.save()
            image_path = image.image.path
            img = load_img(image_path, target_size=(img_height, img_width))
            x = img_to_array(img)
            x = x.reshape(1, img_height, img_width, 3)
            print(x,"gotcha")

            with model_graph.as_default():
                with tf_session.as_default():
                    predictions = model.predict(x)
                    print("predictions",predictions)

            predicted_label = labelInfo[str(np.argmax(predictions[0]))]
            print("predicted_label",predicted_label)

            return Response({'msg': 'Image has been saved'}, status=HTTP_201_CREATED)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
