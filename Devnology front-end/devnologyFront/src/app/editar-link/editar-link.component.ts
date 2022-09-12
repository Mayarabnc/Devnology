import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { LinkModel } from '../model/LinkModel';
import { LinkService } from '../service/link.service';

@Component({
  selector: 'app-editar-link',
  templateUrl: './editar-link.component.html',
  styleUrls: ['./editar-link.component.css']
})
export class EditarLinkComponent implements OnInit {

  link: LinkModel = new LinkModel()

  constructor(
    private linkService: LinkService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token == ""){
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdLink(id)
  }

  findByIdLink(id: number){
    this.linkService.getByIdLink(id).subscribe((resp: LinkModel) => {
      this.link = resp
    })
  }

}
