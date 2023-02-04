import { RoommateType } from './roommates';
import { Table, TableRow } from './Table';

export const RoommateInfo = ({ roommate }: { roommate: RoommateType }) => {
  return (
    <article>
      <header>
        <h1>{roommate.name}</h1>
      </header>
      <Table>
        <TableRow heading="Skill" value={roommate.skill} />
        <TableRow heading="Gadget" value={roommate.gadget} />
        <TableRow heading="Age" value={roommate.age} />
      </Table>
    </article>
  );
};
