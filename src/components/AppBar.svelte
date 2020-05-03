<script>
  import { isSideDrawerOpen } from '../modules/stores';
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import IconButton from '@smui/icon-button';

  let prominent = false;
  let dense = false;
  let secondaryColor = false;
</script>

<TopAppBar variant="static" {prominent} {dense} color={secondaryColor ? 'secondary' : 'primary'}>
  <Row>
    <Section>
      <IconButton on:click={isSideDrawerOpen.toggle} class="material-icons">menu</IconButton>
      <Title>iWish</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Bookmark this page">search</IconButton>
    </Section>
  </Row>
</TopAppBar>
