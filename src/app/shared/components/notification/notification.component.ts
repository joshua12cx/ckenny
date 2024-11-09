import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NotificationService } from '../../../core/index-service';
import { Notification } from '../../../core/index-model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class NotificationComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];
  notificationSub: Subscription = new Subscription();

  constructor(
    private notificationSrv: NotificationService,
  ) { }

  ngOnInit(): void {
    this.notificationSub = this.notificationSrv.getNotifications().subscribe(notifications => {
      this.notifications = notifications;
    });
  }

  ngOnDestroy(): void {
    if(this.notificationSub) this.notificationSub.unsubscribe();
  }
}
