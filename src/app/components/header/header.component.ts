import { Component } from '@angular/core';
import {OAuthService, UserInfo} from "angular-oauth2-oidc";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private readonly oauthService: OAuthService) {
  }

  logout() {
    this.oauthService.logOut();
  }

  public get username() {
    let claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['preferred_username'];
  }

}
