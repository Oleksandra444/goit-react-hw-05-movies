import { Link } from 'react-router-dom';

export default function NotFoundPages() {
  return (
    <>
      <p>
        Сторінка не знайдена. Можете повернутися на сторінку <Link to={'/'}>to Home</Link> 
      </p>
    </>
  );
}