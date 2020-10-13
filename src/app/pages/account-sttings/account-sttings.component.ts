import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-sttings',
  templateUrl: './account-sttings.component.html',
  styles: [
  ]
})
export class AccountSttingsComponent implements OnInit {


  constructor(private settingService: SettingsService) { }

  ngOnInit(): void {

    this.settingService.checkCurrentTheme();

  }

  changeTheme( theme: string ){
    
    this.settingService.changeTheme( theme )
    
  }

  

}
