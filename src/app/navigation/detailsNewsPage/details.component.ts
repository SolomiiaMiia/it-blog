import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { ArticleService } from 'src/app/shared/services/article.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsNewsComponent implements OnInit {

  article: IArticle;
  constructor(private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    public location: Location) { }

  ngOnInit(): void {
    this.getOneArticle()
  }

  private getOneArticle(): void {
    const ID = +this.activatedRoute.snapshot.paramMap.get('id');
    this.articleService.getJSONOneDetailsArticle(ID).subscribe(
      data => {
        this.article = data;
      },
      err => console.log(err)
    );
  }

  deleteArticle(): void {
    if (confirm('Ви впевнені?')) {
      this.articleService.deleteJSONArticle(this.article.id).subscribe(
        () => {
          this.getOneArticle();
          this.location.back();
        },
        err => console.log(err)
      );
    }
  }
}
