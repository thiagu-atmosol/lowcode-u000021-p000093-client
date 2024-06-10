import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { MainService } from "../../../../shared/services/main/main.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
   @Input() sidebarStatus: boolean = false;
  constructor(
    
    private _router: Router,
    private _mainservice: MainService
  ) {}

  ngOnInit(): void {}

  public logout(): void {
    
    this._router.navigate(["/auth/login"]);
  }
  public toggleSidePanel() {
    this._mainservice.toggleSidePanelVisibility();
  }
}
