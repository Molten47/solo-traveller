interface SignUp {
    id: number;
    email: string;
    password:any;
    username:string;
}
interface Setup {

    firstname: string;
    lastname:string;
    country:string;
    state:string;
    city:string;
    phoneNumber?: string;
    address?: string;
    gender?: "male" | "female" | "other";
    travelPurpose?: "leisure" | "business";
    budgetRange?: { min: number; max: number }; // I should make this use a  dropdown, radio etc here....
    preferredAccommodationType?: string; // "hotel" | "shortlet" | "resort"// so tthis should be a dropdown list

}
interface Login {
    id: number;
    email: string;
    password: any;
}
interface NavInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}


export type {
    SignUp,
    Login,
    Setup,
    NavInputProps

}