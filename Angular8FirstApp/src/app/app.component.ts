import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /**Stye css in line
   *  styles: [`
  h3{
    color:red;
  }
  `]
   */

})
export class AppComponent {
  //name = 'wassim';
  username='';
  showSecret = false;
  log = [];
  onToogleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
}
