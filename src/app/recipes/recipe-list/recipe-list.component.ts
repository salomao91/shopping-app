import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pasta', 'Pasta Desc This is simply a test', 'https://live.staticflickr.com/3581/3376508950_cf6fdde39c_b.jpg'),
    new Recipe('Feijoada', 'Feijoada Desc This is simply a test 2', 'https://live.staticflickr.com/1353/1278005353_37a90cea22_b.jpg'),
    new Recipe('Fried Rice', 'Fried Rice Desc This is simply a test 3', 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/9F7490C5-0E95-4D4E-90C9-7A48C8B8BA2E/Derivates/99d05906-f887-4650-9448-804e30d6c7d8.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
