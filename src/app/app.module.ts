import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { registerLocaleData } from '@angular/common'
import en from '@angular/common/locales/en'
import { RouterModule } from '@angular/router'

import { NZ_I18N } from 'ng-zorro-antd/i18n'
import { en_US } from 'ng-zorro-antd/i18n'

import { AppComponent } from './app.component'
import { IconsProviderModule } from './icons-provider.module'

import { RoutersModule } from './routes/routes.module'

registerLocaleData(en)

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RoutersModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
