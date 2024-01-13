import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})



export class ClientComponent {


  clients: { [key: string]: ObjClient }
  objActiveClient: ObjClient;
  strTest: string
  constructor(private route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get('id')?.toString() || ''
    this.strTest = this.route.snapshot.paramMap.get('test')?.toString() || ''
    // id = id.toString()
    // alert(id)
    this.clients = {
      "1": { strClientName: 'jane', strAddress: 'strAddress jane' },
      "2": { strClientName: 'james', strAddress: 'strAddress james' },
      "3": { strClientName: 'jon', strAddress: 'strAddress jon' }
    }

    this.objActiveClient = this.clients[id]
    console.log(this.clients[id]);

  }

}
interface ObjClient { strClientName: string; strAddress: string }
