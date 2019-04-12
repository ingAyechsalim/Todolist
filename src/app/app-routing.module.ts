import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";
import { AboutComponent } from "./components/pages/about/about.component";

const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: "about", pathMatch: "full", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
