import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FirstCard = () => {
  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: 350,
          md: 400,
        },
        height: {
          xs: 260,
          sm: 280,
          md: 300,
        },
        borderRadius: "20px",
        overflow: "hidden",
        position: "relative",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
        }}
      />

      <CardContent
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#ffffff",
            fontWeight: "bold",
            mb: 1,
            fontSize: {
              xs: "22px",
              sm: "24px",
              md: "28px",
            },
          }}
        >
          Custom IT Services
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#d1d5db",
            lineHeight: 1.7,
            fontSize: {
              xs: "13px",
              sm: "14px",
              md: "15px",
            },
          }}
        >
          Tailored technology solutions designed to meet your business goals
          with scalable and modern digital systems.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FirstCard;