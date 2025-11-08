import { Button, PasswordInput, SegmentedControl, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';
import { IconHeartbeat } from '@tabler/icons-react'
import { Link } from 'react-router-dom';


const RegisterPage = () => {

     const form = useForm({
        initialValues: {
        type:"PATIENT",
        email: '',
        password:'',
        confirmPassword:"",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password:(value)=>(!value?"Password is required":null),
      confirmPassword:(value, values) => (value === values.password?null : "Passwords don't match")
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log(values);
  };

  return (
    <div style={{background:'url("/bg.jpg")'}} className='h-screen w-screen  bg-cover! bg-center! bg-no-repeat! flex flex-col items-center justify-center  '>
        <div className=" py-3 text-pink-400 flex gap-1 items-center">
          <IconHeartbeat size={45} stroke={2.5} />
          <span className="font-heading font-semibold text-4xl font-serif">Pulse</span>
        </div>
      <div className='w-[450px] backdrop-blur-md p-10 py-8 rounded-lg' >
        <form action=""  onSubmit={form.onSubmit(handleSubmit)} className='flex flex-col gap-5 [&_input]:placeholder-neutral-100! [&_.mantine-Input-input]:border-white!  [&_.mantine-Input-input]:border [&_input]:pl-2! [&_svg]:text-white [&_input]:text-white!'>
            <div className='self-center font-medium font-serif  text-white text-xl '>Register</div>
            <SegmentedControl {...form.getInputProps("type")} fullWidth size="md" radius="md" color='pink'bg="none" className='**:text-white! border border-white' data={[{label:'Patient',value:"PATIENT"}, {label:'Doctor',value:"DOCTOR"}, {label:'Admin',value:"ADMIN"}]} />
                <TextInput className='focus-within:[&_.mantine-Input-input]:border-pink-400! transition duration-300'
                    variant="unstyled"
                    size="md"
                    radius="md"
                    placeholder="Email"
                    {...form.getInputProps('email')}
                />
                <PasswordInput className='focus-within:[&_.mantine-Input-input]:border-pink-400! transition duration-300'
                    variant="unstyled"
                    size="md"
                    radius="md"
                    placeholder="Password"
                    {...form.getInputProps('password')}
                />
                <PasswordInput className='focus-within:[&_.mantine-Input-input]:border-pink-400! transition duration-300'
                    variant="unstyled"
                    size="md"
                    radius="md"
                    placeholder="confirmPassword"
                    {...form.getInputProps('confirmPassword')}
                />
                <Button type='submit' color='pink' radius="md" size='md'>Register</Button>
                <div className='text-neutral-100 text-sm self-c'>Have an account? <Link to="/login" className='hover:underline'>Login</Link></div>
        </form>
            
      </div>
    </div>
  )
}

export default RegisterPage
