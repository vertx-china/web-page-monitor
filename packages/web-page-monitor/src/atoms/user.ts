import { atom } from 'jotai'
import { focusAtom } from 'jotai/optics'
import { atomWithStorage } from 'jotai/utils'

const userInfo = {
  email: undefined,
  emailState: '', // like confirmed, unverified, ... 
  code: '',
  provider: '',
  logged: false,
}

export const userInfoAtom = atomWithStorage('userInfo',userInfo);
