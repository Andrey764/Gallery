import { Picture } from "./Picture";
export class Gallery{
    private _gallery:Array<Picture>;
    constructor(){
        this._gallery = new Array<Picture>();
        this.InitGallery();
    }
    AddPicture(Title:string, Author:string, YearCreation:string,
        Size:string, Location:string, Path:string){
        this._gallery.push(new Picture(Title, Author, YearCreation, Size, Location, Path));
    }
    private InitGallery(){
        this.AddPicture("Мо́на Ли́за","Леонардо да Винчи","1503—1519","76,8 × 53","Музей: Лувр; Город: Париж","../assets/MonaLisa.jpg")
        this.AddPicture("Мадонна с гвоздикой","Леонардо да Винчи","1478","42 × 67","Музей: Старая пинакотека; Город: Мюнхен","../assets/MadonnaCarnation.jpg")
        this.AddPicture("Благовещение","Леонардо да Винчи","1472—1475","98 × 217","Музей: Уффици; Город: Флоренция","../assets/Annunciation.jpg")
    }
    
    public get Gallery() : Array<Picture> {
        return this._gallery;
    }
    
}