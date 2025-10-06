import { Box } from '@mui/material';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import { useEffect, useState } from 'react';
import BookListingCard from '../../components/SellBookModal/BookListingCard';
// import BookListingCard from '../../components/BookListingCard'; // adjust the path if needed

export default function Dashboard() {
  const [list, setList] = useState([]);

  const token = localStorage.getItem('token');

  const listingApi = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/listings', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();

      if (res.ok) {
        setList(result.listings);
      } else {
        console.log(result.message);
      }
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  useEffect(() => {
    listingApi();
  }, []);

  return (
    <MainLayout>
      <Box display="flex" flexDirection="column" gap={2}>
        {list.length > 0 ? (
          list.map((item, index) => (
            <BookListingCard key={item._id || index} listing={item} />
          ))
        ) : (
          <p>No listings found.</p>
        )}
      </Box>
    </MainLayout>
  );
}
