import { ButtonModule } from './button.module';

describe('AlertModule', () => {
  let alertModule: ButtonModule;

  beforeEach(() => {
    alertModule = new ButtonModule();
  });

  it('should create an instance', () => {
    expect(alertModule).toBeTruthy();
  });
});
