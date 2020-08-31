import {Component} from '@angular/core'
export class EtatCivil {
    private id : number;
    private nom : string;
    private prenoms : string;
    private dateNaissance : Date;
    private professsion : string;

    public getId() : number{
        return this.id;
    }
    public setId(identifiant : number){
        this.id = identifiant;
    }

    public getNom() : string{
        return this.nom;
    }
    public setNom( name : string){
        this.nom = name;
    }
    public getPrenoms() : string{
        return this.prenoms;
    }
    public setPrenoms(pren : string){
        this.prenoms = pren;
    }
    public getDateNaissance() : Date{
        return this.dateNaissance;
    }
    public setDateNaissance(naissance : Date){
        this.dateNaissance = naissance;
    }
    public getProfession() : string{
        return this.professsion;
    }
    public setProfession(prof : string){
        this.professsion = prof;
    }
}