import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast.success("Succesvol ingelogd!");
        navigate("/");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
          },
        });
        if (error) throw error;
        toast.success("Account aangemaakt! Je bent nu ingelogd.");
        navigate("/");
      }
    } catch (error: any) {
      if (error.message.includes("User already registered")) {
        toast.error("Dit e-mailadres is al geregistreerd. Probeer in te loggen.");
      } else if (error.message.includes("Invalid login credentials")) {
        toast.error("Ongeldige inloggegevens. Controleer je e-mail en wachtwoord.");
      } else {
        toast.error(error.message || "Er ging iets mis");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots opacity-40" />
      <motion.div
        className="gradient-blob w-[600px] h-[600px] -top-40 -right-40 opacity-20"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Terug naar home
        </button>

        {/* Card */}
        <div className="card-premium p-8 rounded-3xl">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-lg">SS</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Stad‑Scan Slim
            </span>
          </div>

          {/* Header */}
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {isLogin ? "Welkom terug" : "Account aanmaken"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {isLogin
              ? "Log in om verder te gaan met je scans"
              : "Maak een gratis account aan en start direct"}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">E-mailadres</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="jouw@email.nl"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Wachtwoord</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              variant="dark"
              size="lg"
              className="w-full"
              disabled={loading}
            >
              {loading
                ? "Even geduld..."
                : isLogin
                ? "Inloggen"
                : "Account aanmaken"}
            </Button>
          </form>

          {/* Toggle */}
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">
              {isLogin ? "Nog geen account? " : "Al een account? "}
            </span>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-foreground font-semibold hover:underline"
            >
              {isLogin ? "Registreer gratis" : "Log in"}
            </button>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span>🔒 SSL beveiligd</span>
          <span>•</span>
          <span>GDPR compliant</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
