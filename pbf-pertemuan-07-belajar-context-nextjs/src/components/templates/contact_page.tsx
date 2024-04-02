import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/section2";

export default function ContactPage() {
    return (
        <Section2 isFancy={true}>
            <Heading>My Contact</Heading>
            <Post title="Trisinus Gulo Contact" body="NIM: 2141720035| Phone: +6281235487842 | E-mail: trisinusgulo6@gmail.com"/>
        </Section2>
    );
}