export class Picture{
    constructor(public Title:string, public Author:string, public YearCreation:string,
         public Size:string, public Location:string, public Path:string){
             this.Title=Title;
             this.Author=Author;
             this.Location=Location;
             this.Size=Size;
             this.YearCreation=YearCreation;
             this.Path = Path;
         }
}