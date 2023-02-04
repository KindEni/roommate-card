import shuffle from 'lodash.shuffle';
import data from './data';


export type RoommateType = {
    name: string;
    skill: string;
    gadget: string;
    age: number;
}

export const fetchRoommate = (): Promise<RoommateType> => {
    const [roommate] = shuffle(data);
    return Promise.resolve(roommate);

} 