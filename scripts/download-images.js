const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  origins: [
    {
      url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
      filename: 'ethiopia-yirgacheffe.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
      filename: 'colombia-huila.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
      filename: 'costa-rica-tarrazu.jpg'
    }
  ],
  guides: [
    {
      url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80',
      filename: 'pour-over.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
      filename: 'french-press.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
      filename: 'espresso.jpg'
    }
  ],
  blog: [
    {
      url: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=800&q=80',
      filename: 'coffee-science.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
      filename: 'sustainable-farming.jpg'
    }
  ],
  events: [
    {
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
      filename: 'virtual-cupping.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&q=80',
      filename: 'barista-workshop.jpg'
    }
  ],
  authors: [
    {
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      filename: 'sarah-chen.jpg'
    },
    {
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      filename: 'miguel-rodriguez.jpg'
    }
  ]
};

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(filepath);
        response.pipe(writeStream);
        writeStream.on('finish', () => {
          writeStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function downloadAllImages() {
  for (const [category, imageList] of Object.entries(images)) {
    const dir = path.join(process.cwd(), 'public', 'images', category);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    for (const image of imageList) {
      const filepath = path.join(dir, image.filename);
      console.log(`Downloading ${image.filename}...`);
      try {
        await downloadImage(image.url, filepath);
        console.log(`Successfully downloaded ${image.filename}`);
      } catch (error) {
        console.error(`Error downloading ${image.filename}:`, error);
      }
    }
  }
}

downloadAllImages().catch(console.error); 