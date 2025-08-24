import { List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Activity = {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  isCancelled: boolean;
  city: string;
  venue: string;
  latitude: number;
  longitude: number;
}

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then((response) => setActivities(response.data))
  }, []);

  return (
    <>
      <Typography variant='h3'>Reactivities 2025</Typography>
      {activities && 
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
        
      </List>
      }
    </>
  );
}

export default App;
