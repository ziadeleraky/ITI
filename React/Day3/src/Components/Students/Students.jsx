import OutlinedCard from "./StudentCard";
import { v4 as uuid } from "uuid";

function Students({ studentsData }) {
  return (
    // <div>
    //   <Button color="primary">Click Me</Button>
    // </div>
    <div>
      {studentsData.map((student) => {
        return <OutlinedCard key={uuid()} data={student} />;
      })}
    </div>
    // <Form>
    //   <FormGroup>
    //     <Label for="exampleEmail">Email</Label>
    //     <Input id="exampleEmail" name="email" placeholder="with a placeholder" type="email" />
    //   </FormGroup>
    // </Form>
  );
}

export default Students;
