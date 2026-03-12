import React, { useRef, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  TextField
} from '@mui/material';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import productsData from '../data/products';
import ProductCard from '../components/ProductCard';

function Home() {
  const [category, setCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('none');
  const [searchQuery, setSearchQuery] = useState('');
  const productSectionRef = useRef(null);

  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleSortChange = (e) => setSortOrder(e.target.value);

  const filteredProducts = productsData
    .filter((product) => category === 'all' || product.category === category)
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      if (sortOrder === 'desc') return b.price - a.price;
      return 0;
    });

  return (
    <Box
      sx={{
        backgroundImage: `url('https://www.hdwallpapers.in/download/louis_vuitton_first_letter_in_black_background_hd_louis_vuitton-1920x1080.jpg')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        minHeight: '100vh',
        py: 4,
      }}
    >
      <Hero scrollTargetRef={productSectionRef} />

      <Container
        id="product-section"
        ref={productSectionRef}
        sx={{
          mt: 8,
          mb: 5,
          p: { xs: 2, sm: 4 },
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Louis Vuitton Products
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            gap={2}
            mb={4}
          >
            <FormControl size="small" sx={{ minWidth: 140 }}>
              <InputLabel>Filter</InputLabel>
              <Select value={category} onChange={handleCategoryChange} label="Filter">
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="handbag">Women's Handbags</MenuItem>
                <MenuItem value="shoes">Shoes</MenuItem>
                <MenuItem value="perfume">Perfumes</MenuItem>
                <MenuItem value="belt">Belts</MenuItem>
                <MenuItem value="menbag">Men's Bags</MenuItem>
                <MenuItem value="bracelet">Bracelets</MenuItem>
                <MenuItem value="clutch">Clutches</MenuItem>
                <MenuItem value="earrings">Earrings</MenuItem>
                <MenuItem value="hat">Hats</MenuItem>
                <MenuItem value="jacket">Jackets</MenuItem>
                <MenuItem value="necklace">Necklaces</MenuItem>
                <MenuItem value="sandal">Sandals</MenuItem>
                <MenuItem value="scarf">Scarves</MenuItem>
                <MenuItem value="sunglasses">Sunglasses</MenuItem>
                <MenuItem value="wallet">Wallets</MenuItem>
                <MenuItem value="watch">Watches</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 130 }}>
              <InputLabel>Sort</InputLabel>
              <Select value={sortOrder} onChange={handleSortChange} label="Sort">
                <MenuItem value="none">None</MenuItem>
                <MenuItem value="asc">Low to High</MenuItem>
                <MenuItem value="desc">High to Low</MenuItem>
              </Select>
            </FormControl>

            <TextField
              size="small"
              label="Search"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ minWidth: 160 }}
            />
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {filteredProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
