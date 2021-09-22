import data from '../json/FishEyeData.json'

class Photographer{
    /**
     * 
     * @param {object} obj 
     */
    constructor(obj){
        this.name=obj.name
        this.location=obj.city + " " + obj.country
        this.slogan=obj.tagline
        this.tarif=obj.price
        this.tags=pbj.tags
    }
}
let photographers=[]
data.photographers.forEach(element => {
    phot=new Photographer(element)
    console.log(element)
});