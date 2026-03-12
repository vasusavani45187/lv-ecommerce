import React from 'react';
import {
  Container,
  Typography,
  Box,
  Divider,
  Grid,
  Avatar,
  Paper,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const About = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://www.transparenttextures.com/patterns/cream-dust.png')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
        py: 8
      }}
    >
      <Box
        sx={{
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(255,255,255,0.85)',
          borderRadius: 3,
          mx: 'auto',
          px: { xs: 2, md: 4 },
          py: { xs: 4, md: 6 },
          maxWidth: '1200px',
        }}
      >
        {/* Hero Banner with Parallax (stays on top of fixed bg) */}
        <Box
          sx={{
            backgroundImage: `url('https://in.louisvuitton.com/images/is/image/lv/1/VE_DI3_L/louis-vuitton-stores-in-louis-vuitton-mumbai-jio-world-center--StFi_Louis_Vuitton_JioWorld_3_DI3.jpg?wid=1200&hei=630')`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: { xs: '250px', md: '450px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
            px: 2,
            borderRadius: 2,
            mb: 6
          }}
        >
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 'bold', letterSpacing: 2 }}>
              Louis Vuitton
            </Typography>
            <Typography variant="h6">Timeless Luxury Since 1854</Typography>
          </Box>
        </Box>

        {/* Main Content */}
        {[
          {
            title: 'About Us',
            content:
              'Louis Vuitton is a name synonymous with timeless style, world-class craftsmanship, and modern elegance. Our brand brings luxury into the lives of discerning customers who appreciate detail, tradition, and sophistication.',
          },
          {
            title: 'Our Mission',
            content:
              'Louis Vuitton\'s mission is to embody and preserve the spirit of travel through elegance and innovation. We blend artisanal heritage with forward-thinking design, crafting experiences and products that transcend fashion.',
            image:
              'https://images.lsnglobal.com/T0ZNgmUTQfQesbk720sDIBQ9Wjo=/0x197:1200x997/926x520/filters:quality(80):strip_exif():strip_icc()/filestorage/images/117036/web3-collectibles-visual-univers-greenwaterfalls-social-038-sem-1200x1200.png',
          },
          {
            title: 'What We Offer',
            content:
              'From signature handbags and leather accessories to perfumes, footwear, menswear, jewelry, and scarves — we curate iconic Louis Vuitton collections that define luxury.',
          },
          {
            title: 'A Legacy of Craftsmanship',
            content:
              'Since 1854, Louis Vuitton has set the standard for luxury with its iconic monogram, handcrafted trunks, and meticulously made leather goods. Today, we continue to innovate while respecting our roots — working with world-renowned designers, embracing digital fashion, and collaborating across global cultures.',
            image:
              'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/11/27194824/Untitled-design-14-4-1600x900.png',
          },
          {
            title: 'The Experience You Deserve',
            content:
              'We offer a seamless online shopping journey – from browsing exquisite pieces, secure payment, and fast delivery to dedicated customer support. Every interaction with us is designed to reflect the elegance of Louis Vuitton.',
          },
        ].map((section, index) => (
          <motion.div key={index} {...fadeInUp} viewport={{ once: true }}>
            <Typography variant="h4" gutterBottom sx={{ mt: index === 0 ? 0 : 6 }}>
              {section.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {section.content}
            </Typography>
            {section.image && (
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(8px)',
                  boxShadow: 3,
                  my: 3,
                  textAlign: 'center'
                }}
              >
                <Box
                  component="img"
                  src={section.image}
                  alt={section.title}
                  sx={{
                    width: '100%',
                    maxWidth: '700px',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: 2,
                    mx: 'auto'
                  }}
                />
              </Box>
            )}
            <Divider sx={{ my: 4 }} />
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div {...fadeInUp} viewport={{ once: true }}>
          <Typography variant="h4" gutterBottom>Discover Timeless Elegance</Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Join thousands of fashion lovers who trust Louis Vuitton to elevate their lifestyle.
            Begin your journey with a collection that’s made to inspire and last a lifetime.
          </Typography>
          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              color="primary"
              href="/home"
              sx={{
                borderRadius: 50,
                px: 4,
                py: 1.2,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem'
              }}
            >
              Explore Our Collections
            </Button>
          </Box>
        </motion.div>

        <Divider sx={{ my: 6 }} />

        {/* Runway Image */}
        <motion.div {...fadeInUp} viewport={{ once: true }}>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(8px)',
              boxShadow: 3,
              my: 3,
              textAlign: 'center'
            }}
          >
            <Box
              component="img"
              src="https://assets.vogue.com/photos/640669df22c03e383970c600/6:7/w_1024%2Cc_limit/louis-vuitton-resort-san-diego-emily-malan-030.jpg"
              alt="LV Runway Show"
              sx={{
                width: '100%',
                maxWidth: '700px',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: 2,
                mx: 'auto'
              }}
            />
          </Box>
        </motion.div>

        {/* Team Section */}
        <Typography variant="h4" gutterBottom>Meet Our Creative Team</Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {[
            {
              name: 'Nicolas Ghesquière',
              role: 'Creative Director, Women’s Collections',
              img: 'https://in.louisvuitton.com/content/dam/lv/online/high-end/wolv/la-maison/U_Ma_Nicolas_Ghesquiere.html/jcr:content/assets/LV_NICOLAS_GHESQUI-RE_0057_LVCOM_1600x2000.jpg'
            },
            {
              name: 'Virgil Abloh',
              role: 'Former Artistic Director, Men’s Wear',
              img: 'https://static.dezeen.com/uploads/2020/12/virgil-abloh-portrait-off-white-interview-dezeen-sq.jpg'
            },
            {
              name: 'Delphine Arnault',
              role: 'Chairwoman and CEO',
              img: 'https://images.prismic.io/lvmh-com/Z-J6pndAxsiBv28Q_DelphineArnault.jpg?auto=format%2Ccompress&fit=max&w=3840'
            }
          ].map((member, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div {...fadeInUp} viewport={{ once: true }}>
                <Paper
                  elevation={6}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 10,
                    },
                  }}
                >
                  <Avatar
                    src={member.img}
                    alt={member.name}
                    sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                  />
                  <Typography variant="h6">{member.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Footer */}
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{ mt: 8 }}
        >
          © {new Date().getFullYear()} Louis Vuitton. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
