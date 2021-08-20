import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  
  @Input() user: User;
  @Output() setUser = new EventEmitter<User>();
  @Output() closeEvent = new EventEmitter<string>();

  photoselected: string;
  file: File;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if(this.user.photo) {
      this.setImageURL();
    }
  }

  setImageURL() {
    this.photoselected = `http://localhost:3000/${this.user.photo}`;
  }

  onChange(file: HTMLInputElement) {
    if(file.files && file.files[0]){
      this.file = file.files[0];
      const reader = new FileReader();
      reader.onload = () => this.photoselected = reader.result as string;
      reader.readAsDataURL(this.file);
      this.userService.putUser(this.user._id as string, this.user, this.file)
      .subscribe(
        (res: any) => {
          this.user = res;
          this.setImageURL();
          this.setUser.emit(this.user);
        }
      );
    }
  }

  onImageError(event: any) {
    event.target.src = 'https://i0.wp.com/www.labicok.com/wp-content/uploads/2020/06/default-user-image.png?ssl=1';
  }

  closeInfo(){
    this.closeEvent?.emit();
  }

}
