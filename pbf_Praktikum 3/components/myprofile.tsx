import { getImageUrl } from '../utils/utils';

interface Person {
    name: string;
    imageId: string;
}

function MyAvatar({ person, size }: {person: Person; size: number}) {
    let imgSize = size < 90 ? 's' : 'b';
    return (
        <img
            className="avatar"
            src={getImageUrl(person.imageId)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function MyProfile() {
    return (
        <MyAvatar
            size={40}
            person={{ 
                name: 'Gregorio Y. Zara', 
                imageId: '7vQD0fP',
            }}
        />
    );
}
