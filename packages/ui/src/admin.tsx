import { InputBox } from './input-box'
import { Button } from './button'

const AdminHeader = () => {
  return (
    <div>
        <h1>This is Admin Header</h1>
        <InputBox placeholder='username' />
        <InputBox placeholder='password' />
        <Button>Signup</Button>
    </div>
  )
}

export default AdminHeader