//  import required stuff from vue/test-utils
import { shallowMount } from '@vue/test-utils';

// import axios & axios mock
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// import component to mock
import ChangePasswordForm from '@/components/Forms/ChangePasswordForm.vue';

describe('FullComponentTest', () => {
  it('Verify default values', () => {
    const wrapper = shallowMount(ChangePasswordForm);

    const newPassword = wrapper.find('[data-testid="newPassword"]');
    const confirmPassword = wrapper.find('[data-testid="ConfirmPassword"]');
    const changePasswordBtn = wrapper.find('[data-testid="changePasswordBtn"]');
    const changePasswordBtnStatus = changePasswordBtn.attributes().disabled;
    const missMatchAlert = wrapper.find('#swal2-title');

    expect(newPassword.exists()).toBe(true);
    expect(confirmPassword.exists()).toBe(true);
    expect(changePasswordBtn.exists()).toBe(true);
    expect(changePasswordBtnStatus).toBe('true');
    expect(missMatchAlert.exists()).toBe(false);
  });
});
