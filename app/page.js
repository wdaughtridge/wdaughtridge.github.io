'use client';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import { Divider, Input, FormControl, FormHelperText, Button } from '@mui/joy';
import { Fade } from '@mui/material';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState({
    email: '',
    status: 'initial',
  });
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradient-to-b from-green-400 to-blue-500 space-y-8">
      <div className="flex space-x-1">
        <div className="self-end md:w-auto md:h-auto">
          <CloudQueueIcon sx={{ width: '3em', height: '3em' }} />
        </div>
        <p className="text-8xl">stradis</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl">Seamlessly integrate ticket platforms like Ticketmaster, StubHub, and SeatGeek with one unified API.</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl pb-4"><i>Why</i> use <b>stradis</b>?</p>
        <p className="text-2xl">One API. Any service.</p>
        <p className="text-md">Give your venue&apos;s website or app the power of ticket sales and distribution without the development costs.</p>
        <p className="text-md">Enable your users to buy tickets directly from your site through a connected trusted ticket platform.</p>
        <p className="text-md">List your upcoming events from any platform directly on your site.</p>
        <p className="text-md">Pay-as-you-go pricing. Only pay for what you need.</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl pb-4">Allow users to connect their streaming music accounts.</p>
        <p className="text-md">See what your users are listening to for better tailored marketing.</p>
        <p className="text-md">Share curated playlists of upcoming artists to users directly from your site.</p>
        <p className="text-md">Create unique music events your community would love.</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-4xl pb-4"><b>Spread the love of music with <i>stradis</i>.</b></p>
      </div>
      <Divider />
      <div className="flex items-center space-x-2">
        <p className="text-2xl self-center">Contact Us</p>
        <form encType="text/plain" onSubmit={() => setSubmitted(true)} target="hidden_iframe" action='https://docs.google.com/forms/d/e/1FAIpQLSeNW5zpEKSOco6BdAzKpqu03X7dkliqNIn4BVLmFt9-bhQYcg/formResponse?' id="form">
          <FormControl>
            <Input
              sx={{ '--Input-decoratorChildHeight': '45px', border: '#fff !important' }}
              placeholder="person@stradis.com"
              type="email"
              required
              value={data.email}
              name='entry.1871230348'
              id='entry.1871230348'
              onChange={(event) =>
                setData({ email: event.target.value, status: 'initial' })
              }
              error={data.status === 'failure'}
              endDecorator={
                <Button
                  variant="solid"
                  loading={data.status === 'loading'}
                  type="submit"
                  sx={{ borderTopLeftRadius: 0, 
                        borderBottomLeftRadius: 0, 
                        backgroundColor: '#0323ab !important',
                        color: '#fff',
                        '&:hover': {
                          backgroundColor: '#03ab4c !important',
                          color: '#fff',
                        }
                    }}
                >
                  Subscribe
                </Button>
              }
            />
          </FormControl>
        </form>
      </div>
      {submitted && (
        <FormHelperText
          sx={{color: "#fff" }}
        >
          Your email has been sent!!
        </FormHelperText>
      )}
      <iframe name="hidden_iframe" id="hidden_iframe" style={{display: 'none'}} onLoad={() => {if(submitted) {}}}></iframe>
    </main>
  )
}
