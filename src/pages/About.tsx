const About = () => {
  return (
    <div className="min-h-full bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About Project Silicium</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Project Silicium is an innovative open-source initiative focused on porting 
            Project Mu UEFI firmware to ARM-based mobile devices.
          </p>
          
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Mission</h2>
            <p className="text-muted-foreground">
              Our mission is to break the boundaries between mobile and desktop computing 
              by enabling full Windows 10/11 ARM64 compatibility on smartphones and tablets 
              through modern UEFI firmware implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Technical Focus</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• ARM device support</li>
                <li>• UEFI firmware porting</li>
                <li>• Windows compatibility</li>
                <li>• Hardware abstraction</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-2">Community</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>• Open source development</li>
                <li>• Collaborative research</li>
                <li>• Documentation sharing</li>
                <li>• Device compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;