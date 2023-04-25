'use client';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import { Divider, Input, FormControl, FormHelperText, Button } from '@mui/joy';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState({
    email: '',
    status: 'initial',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: 'loading' }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: '', status: 'sent' });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: 'failure' }));
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradient-to-b from-green-400 to-blue-500 space-y-8">
      <div className="flex space-x-1">
        <div className="self-end md:w-auto md:h-auto">
          <CloudQueueIcon sx={{ width: '3em', height: '3em' }} />
        </div>
        <p className="text-8xl">stradis</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl">Query your users&apos; favorite streamed music with one API.</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl pb-4"><i>Why</i> use <b>stradis</b>?</p>
        <p className="text-md">Enhance your product&apos;s UX by accounting for their music tastes.</p>
        <p className="text-md">Promoting concerts? With one API call, see what a user is listening to for tailored marketing.</p>
        <p className="text-md">Spotify, Apple Music, YouTube Music, Amazon Music, Pandora, Deezer. It doesn&apos;t matter.</p>
        <p className="text-md">Suggest artists, albums, and songs. Add them to a playlist wihout the user ever leaving.</p>
        <p className="text-md">Pay-as-you-go pricing. Only pay for what you need.</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-4xl pb-4"><b>Spread the love of music.</b></p>
      </div>
      <Divider />
      <div className="flex items-center space-x-2">
        <p className="text-2xl self-center">Request a Demo</p>
        <form onSubmit={handleSubmit} id="demo">
          <FormControl>
            <Input
              sx={{ '--Input-decoratorChildHeight': '45px', border: '#fff !important' }}
              placeholder="person@stradis.com"
              type="email"
              required
              value={data.email}
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
            {data.status === 'failure' && (
              <FormHelperText
                sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
              >
                Oops! something went wrong, please try again later.
              </FormHelperText>
            )}

            {data.status === 'sent' && (
              <FormHelperText
                sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
              >
                You are all set!
              </FormHelperText>
            )}
          </FormControl>
        </form>
      </div>
    </main>
  )
}
