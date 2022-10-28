import './App.css';
import LinkList from './Compoments/LinkList';
import ProfileHeader from './Compoments/ProfileHeader';
import Slack from './Assets/slack.png';
import GitHub from './Assets/Icon.png';
import Footer from './Compoments/Footer';

function App() {
  return (
    <div className="md:container md:mx-auto">
      <ProfileHeader />
      <LinkList />

      <div className='flex justify-center gap-6 my-12'>

        <a href="https://slack.com/earl"><img src={Slack} alt="" /></a>
        <a href="https://github.com/EarlPappi"><img src={GitHub} alt="" /></a>

      </div>


      <Footer />
    </div>

  );
}

export default App;
