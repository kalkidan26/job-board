import { useState } from "react";

const Description = () => {
    const [name, setName] = useState('icog');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('kal');
    }

    return ( 
        <div class="flex">
        <div class="w-1/2 h-32 bg-red-300 border-2 border-gray-500">Left bBox</div>
        <div class="w-1/2 h-32 bg-gray-300 border-2 border-gray-500">Right Box</div>
      </div>
     );
}
 
export default Description;