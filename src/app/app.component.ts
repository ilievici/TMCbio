import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  onAnchorClick() {
    this.route.fragment.subscribe(f => {
      const element = document.querySelector("#" + f)
      if (element != null)
        element.scrollIntoView(true);
    });
  }
}