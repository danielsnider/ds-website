
export default `
<p align="center">
 <img src="https://github.com/danielsnider/ros-rover/blob/master/diagrams/montage.jpg?raw=true" alt="Drawing"
  style='width: calc(100% + 39px);
    margin-left: -15px;
    margin-top: -17px;'
 >
 <img src="http://wiki.ros.org/simple_drive?action=AttachFile&do=get&target=Xbox_Controller.png" alt="Drawing" width="55%">
 <img src="https://raw.githubusercontent.com/danielsnider/ros-rover/master/diagrams/Rover_Diagram.png" alt="Drawing" width="42%">
</p>

This page lists my open source contributions made while working on the University Rover Challenge (URC) 2017 with Team R3 of Ryerson University in Toronto, Canada.

#### Demonstration of Autonomous Rover Navigation

Autonomous navigation video: https://www.youtube.com/watch?v=p_1nkSQS8HE

<p align="center">
  <a target="_blank" href="https://www.youtube.com/watch?v=p_1nkSQS8HE"><img src="https://github.com/danielsnider/ros-rover/blob/0bf4455128aebef086967d9166ea190e2f7696bb/diagrams/autonomous-rover.jpg?raw=true" target="_blank" alt="demo" width="100%"></a>
</p>

More video of our rover in action: https://youtu.be/YEfgYmFqJqM

### Published Book Chapter:

**Robot Operating System (ROS): The Complete Reference (Volume 3), Studies in Computational Intelligence** Released July 2, 2018.

Detailed instructions and tips are published in a book chapter. <br>
Link to chapter: [PDF](https://github.com/danielsnider/ros-rover/raw/master/Book%20Chapter%20-%20University%20Rover%20Challenge%20Tutorials%20and%20Control%20System%20Survey.pdf), [LATEX](https://github.com/danielsnider/ros-rover/raw/master/diagrams/LATEX%20Book%20Chapter.zip), or an older [DOCX](https://github.com/danielsnider/ros-rover/raw/master/diagrams/DOCX%20Book%20Chapter%20-%20University%20Rover%20Challenge%20Tutorials%20and%20Control%20System%20Survey.docx) version. <br>
Link to [book on Amazon](https://www.amazon.com/Robot-Operating-System-ROS-Computational/dp/3319915894/ref=sr_1_fkmr0_3?ie=UTF8&qid=1526347481&sr=8-3-fkmr0&keywords=complete+guide+to+robot+operating+system).

<p align="center">
 <img src="https://github.com/danielsnider/ros-rover/blob/master/diagrams/book_cover2.jpg?raw=true" alt="Drawing" width="40%">
 <img src="https://github.com/danielsnider/ros-rover/blob/master/diagrams/chapter_first_page.png?raw=true" alt="Drawing" width="33.7%">
</p>

**Full documentation in a book chapter: [Book Chapter - University Rover Challenge Tutorials and Team Survey.pdf](https://github.com/danielsnider/ros-rover/raw/master/Book%20Chapter%20-%20University%20Rover%20Challenge%20Tutorials%20and%20Control%20System%20Survey.pdf)**

**Full source code for our rover: https://github.com/danielsnider/URC**

### Rover Diagram:


<p align="center">
 <img src="https://raw.githubusercontent.com/danielsnider/ros-rover/master/diagrams/Rover_Diagram.png" alt="Drawing" width="100%">
</p>

Rover Diagram in Visio Format: [Rover_Diagram.vsdx](https://github.com/danielsnider/ros-rover/blob/master/diagrams/Rover_Diagram.vsdx?raw=true)


### simple_drive [![Build Status](http://build.ros.org/buildStatus/icon?job=Kbin_uX64__simple_drive__ubuntu_xenial_amd64__binary)](http://build.ros.org/job/Kbin_uX64__simple_drive__ubuntu_xenial_amd64__binary)

A simple robot drive system for skid steering joystick teleoperation, control of a panning servo to look around the robot, and Arduino firmware.

<p align="center">
 <img src="http://wiki.ros.org/simple_drive?action=AttachFile&do=get&target=Xbox_Controller.png" alt="Drawing" width="50%">
 <img src="http://wiki.ros.org/simple_drive?action=AttachFile&do=get&target=R3+in+Utah-low.JPG" alt="Drawing" width="45%">
 <img src="http://wiki.ros.org/simple_drive?action=AttachFile&do=get&target=Simple_Drive_Diagram.png" alt="Drawing" width="95%">
</p>

Project homepage: [http://wiki.ros.org/simple_drive](http://wiki.ros.org/simple_drive)


### simple_arm [![Build Status](http://build.ros.org/buildStatus/icon?job=Kbin_uX64__simple_arm__ubuntu_xenial_amd64__binary)](http://build.ros.org/job/Kbin_uX64__simple_arm__ubuntu_xenial_amd64__binary)

Simple 6-axis robot arm teleoperation software and Arduino firmware.

<p align="center">
 <img src="https://github.com/danielsnider/ros-rover/raw/master/diagrams/simple_arm.jpg" alt="Drawing" width="100%">
</p>

Project homepage: [http://wiki.ros.org/simple_arm](http://wiki.ros.org/simple_arm)


### follow_waypoints [![Build Status](http://build.ros.org/buildStatus/icon?job=Kbin_uX64__follow_waypoints__ubuntu_xenial_amd64__binary)](http://build.ros.org/job/Kbin_uX64__follow_waypoints__ubuntu_xenial_amd64__binary)

A package that will buffer \`move_base\` goals until instructed to navigate to all waypoints in sequence.

<p align="center">
 <img src="https://raw.githubusercontent.com/danielsnider/follow_waypoints/master/readme_images/follow_waypoints_rviz.png" alt="Drawing" width="100%">
</p>

Project homepage: [http://wiki.ros.org/follow_waypoints](http://wiki.ros.org/follow_waypoints)


### image_overlay_scale_and_compass [![Build Status](http://build.ros.org/buildStatus/icon?job=Kbin_uX64__image_overlay_scale_and_compass__ubuntu_xenial_amd64__binary)](http://build.ros.org/job/Kbin_uX64__image_overlay_scale_and_compass__ubuntu_xenial_amd64__binary)

Add an indication of scale and compass to live images.

<p align="center">
 <img src="http://wiki.ros.org/image_overlay_scale_and_compass?action=AttachFile&do=get&target=mars.png" alt="Drawing" width="80%">
</p>

Project homepage: [http://wiki.ros.org/image_overlay_scale_and_compass](http://wiki.ros.org/image_overlay_scale_and_compass)

### Advanced Terminal Organization

ROS robots are often controlled by many bash terminals and the startup sequence involves many roslaunch commands in different terminals. I demonstrate how you can use Tmux on your robot to codify your terminal layout into a powerful ROS administration system. The organized, repeatable tmux view can be shared in real-time by all of your teammembers for a consistent view of the robot's inner workings.

<p align="center">
 <img src="https://github.com/danielsnider/ros-rover/raw/master/diagrams/tmuxinator_ROS_60.jpg" alt="Drawing" width="80%">
 <img src="https://github.com/danielsnider/ros-rover/raw/master/diagrams/tmuxinator_ROS2_60.jpg" alt="Drawing" width="80%">
</p>

- The tmuxinator config used by Team R3 to start all the rover software components is here:
https://github.com/teamr3/URC/blob/master/.tmuxinator.yml
- The tmuxinator config used by Team R3 to start all the base station
control components is here: https://github.com/teamr3/URC/blob/master/devstuff/dan/.tmuxinator.yml

### MapProxy docker container for ROS MapViz

Proxy zoomable map tiles from Google Maps to ROS MapViz for use with outdoor robots. For easy setup of MapProxy in a docker container to proxy Google Maps satellite view into a WMTS tile service so that it can be viewed by ROS's MapViz Tile Map plugin. Support for offline maps after loading once, maps stay cached. For outdoor robotics and vehicles.

<p align="center">
 <img src="https://github.com/danielsnider/MapViz-Tile-Map-Google-Maps-Satellite/raw/master/screenshot.png" alt="Drawing" width="35.8%">
 <img src="https://github.com/swri-robotics/mapviz/wiki/mapviz.png" alt="Drawing" width="60%">
</p>

Project homepage: [https://github.com/danielsnider/MapViz-Tile-Map-Google-Maps-Satellite](https://github.com/danielsnider/MapViz-Tile-Map-Google-Maps-Satellite)

`;
