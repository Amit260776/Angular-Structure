import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule, MatExpansionPanelHeader, MatExpansionPanel, MatExpansionPanelTitle } from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatExpansionPanelHeader, MatExpansionPanel, MatExpansionPanelTitle],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'structureApp';  
}
