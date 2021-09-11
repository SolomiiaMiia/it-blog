import { Component, OnInit, TemplateRef } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { Article } from 'src/app/shared/models/article.model';
import { ArticleService } from 'src/app/shared/services/article.service';

@Component({
  selector: 'app-one-theme',
  templateUrl: './one-theme.component.html',
  styleUrls: ['./one-theme.component.css']
})
export class OneThemeComponent implements OnInit {
  currentCategory: any;

  itemID?: number = 1;
  article: Array<IArticle> = [];
  itemTitle: string = '';
  itemUrlName: string = '';
  itemDescription: string = '';
  file: any;
  upload: any;
  isUpload: boolean;
  itemImage: string;

  modalRef: BsModalRef;

  constructor(private modalService: BsModalService,
    private articleService: ArticleService,
    private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
    this.getServerArticle();
  }

  selectCategory() {
    this.articleService.choiceCategories(this.currentCategory);
  }

  private getServerArticle(): void {
    this.articleService.getJSONArticle().subscribe(
      data => {
        this.article = data;
      },
      err => console.log(err)
    );
  }

  addItem(): void {
    const NEW_ITEM = new Article(this.itemUrlName, this.itemImage, this.itemTitle,
      this.itemDescription);
    delete NEW_ITEM.id;
    this.articleService.postJSONArticle(NEW_ITEM).subscribe(
      () => {
        this.getServerArticle();
      },
      err => console.log(err)
    );
    this.modalRef?.hide();
    this.resetForm();
  }

  private resetForm(): void {
    this.itemTitle = '';
    this.itemUrlName = '';
    this.itemDescription = '';
  }

  uploadFile(event): void {
    this.file = event.target.files[0];
    const filePath = `images/${this.file.name}`;
    this.upload = this.afStorage.upload(filePath, this.file);
    this.upload.then(image => {
      this.afStorage.ref(`images/${image.metadata.name}`).getDownloadURL().subscribe(url => {
        this.itemImage = url;
        event.target.files = null;
        this.isUpload = true;
      });
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
