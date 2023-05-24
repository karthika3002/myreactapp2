import { useRouter } from 'next/router';
//userouter:import values from url
export default function Home() {
  const router = useRouter();
 // const {n,m} = router.query;
  return (<h1>Hello {router.query.name}, age is {router.query.age}</h1>);
  
  //return (
   // <h1>{router.query.name
  //? `Hello ${router.query.name}`
 // : "i dont knw u"}
  //</h1>);
}