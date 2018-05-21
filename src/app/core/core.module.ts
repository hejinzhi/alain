import { TokenService } from '@delon/auth';
import { UtilService } from './util/util.service';
import { RoutesGuard } from './../routes/routes.guard';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { I18NService } from './i18n/i18n.service';

@NgModule({
  providers: [I18NService, RoutesGuard, UtilService, TokenService],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
