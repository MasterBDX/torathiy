class Locations {
    constructor(id, name, latitude, longitude, imageUrl, description) {
        this.id = id,
            this.name = name,
            this.latitude = latitude,
            this.longitude = longitude,
            this.imageUrl = imageUrl,
            this.description = description
    }
}


export default [
    new Locations(1,
        'ميدان الشهداء',
        32.89551770637145,
        13.181513494232727,
        "http://rawahil.com/wp-content/uploads/2019/05/martyr-s-square.jpg",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit"),

    new Locations(2,
        'جامع بورقيبة',
        32.894493606596455,
        13.170745621817026,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76U2dxSm6pn-M3y763DiplvFFWV1ehwHMOrcri3wF5bewMiNYhJ3u9Z7aT97OYrOn7Q4&usqp=CAU",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit"),

    new Locations(3,
        'Tripoli Castle',
        32.89606168282223,
        13.180329452247035,
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBO6LCWeAmmR0_8sgZRJE5FLeVY7vZNStNmELOEX9c&s",
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit"),

]