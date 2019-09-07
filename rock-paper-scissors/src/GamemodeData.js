import FriendsThumb from "./images/friends.png"
import BigBangTheoryThumb from "./images/bigbangtheory.png"
import VanillaThumb from "./images/vanillaicecream.jpg"

const gamemodeData = [
  {
    id: 1,
    key: 'Vanilla',
    text: 'Vanilla',
    value: 'Vanilla',
    image: {avatar: true, src: VanillaThumb}
  },
  {
    id: 2,
    key: 'Friends',
    text: 'Friends',
    value: 'Friends',
    image: {avatar: true, src: FriendsThumb}
  },
  {
    id: 3,
    key: 'The Big Bang Theory',
    text: 'The Big Bang Theory',
    value: 'The Big Bang Theory',
    image: {avatar: true, src: BigBangTheoryThumb}
  }
];

export default gamemodeData;