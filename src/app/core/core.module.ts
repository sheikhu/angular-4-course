import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [AppRoutingModule, HeaderComponent],
  declarations: [ HeaderComponent, HomeComponent ],
  providers: [
    RecipeService,
    ShoppingListService,
    DataStorageService,
    AuthService
  ],
})
export class CoreModule {
}
