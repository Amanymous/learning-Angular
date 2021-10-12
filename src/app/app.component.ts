import { Component,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-angular';
  constructor(private viewContainer:ViewContainerRef,
    private cfr:ComponentFactoryResolver){}
      async loadAdmin(){
        this.viewContainer.clear()
        const {AdminListComponent} = await import('./admin-list/admin-list.component');
        this.viewContainer.createComponent(
          this.cfr.resolveComponentFactory(AdminListComponent)
        )
      }
      async loadUser(){
        this.viewContainer.clear()
        const {UserListComponent} = await import('./user-list/user-list.component');
        this.viewContainer.createComponent(
          this.cfr.resolveComponentFactory(UserListComponent)
        )
      }

}
