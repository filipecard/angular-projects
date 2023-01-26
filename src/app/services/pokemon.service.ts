import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Pokemon } from "../model/pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: String[] = [];

  constructor(private httpClient: HttpClient) { 
    this.loadPokemons();
  }

  async loadPokemons()  {
    const listPokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const request = await lastValueFrom(this.httpClient.get<any>(listPokemonUrl));
    request.results.forEach((e: Pokemon) => {this.pokemons.push(e.name)}); 
  }


}

