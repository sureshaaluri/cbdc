# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.16

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/suresh/CBDC/opencbdc-tx

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/suresh/CBDC/opencbdc-tx/build

# Include any dependencies generated for this target.
include src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/depend.make

# Include the progress variables for this target.
include src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/progress.make

# Include the compile flags for this target's objects.
include src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/flags.make

src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/controller.o: src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/flags.make
src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/controller.o: ../src/uhs/twophase/sentinel_2pc/controller.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/controller.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/sentinel_2pc && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/sentinel_2pc.dir/controller.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/sentinel_2pc/controller.cpp

src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/controller.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/sentinel_2pc.dir/controller.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/sentinel_2pc && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/sentinel_2pc/controller.cpp > CMakeFiles/sentinel_2pc.dir/controller.i

src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/controller.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/sentinel_2pc.dir/controller.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/sentinel_2pc && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/sentinel_2pc/controller.cpp -o CMakeFiles/sentinel_2pc.dir/controller.s

src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/server.o: src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/flags.make
src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/server.o: ../src/uhs/twophase/sentinel_2pc/server.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/server.o"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/sentinel_2pc && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/sentinel_2pc.dir/server.o -c /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/sentinel_2pc/server.cpp

src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/server.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/sentinel_2pc.dir/server.i"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/sentinel_2pc && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/sentinel_2pc/server.cpp > CMakeFiles/sentinel_2pc.dir/server.i

src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/server.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/sentinel_2pc.dir/server.s"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/sentinel_2pc && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/sentinel_2pc/server.cpp -o CMakeFiles/sentinel_2pc.dir/server.s

# Object files for target sentinel_2pc
sentinel_2pc_OBJECTS = \
"CMakeFiles/sentinel_2pc.dir/controller.o" \
"CMakeFiles/sentinel_2pc.dir/server.o"

# External object files for target sentinel_2pc
sentinel_2pc_EXTERNAL_OBJECTS =

src/uhs/twophase/sentinel_2pc/libsentinel_2pc.a: src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/controller.o
src/uhs/twophase/sentinel_2pc/libsentinel_2pc.a: src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/server.o
src/uhs/twophase/sentinel_2pc/libsentinel_2pc.a: src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/build.make
src/uhs/twophase/sentinel_2pc/libsentinel_2pc.a: src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/suresh/CBDC/opencbdc-tx/build/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Linking CXX static library libsentinel_2pc.a"
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/sentinel_2pc && $(CMAKE_COMMAND) -P CMakeFiles/sentinel_2pc.dir/cmake_clean_target.cmake
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/sentinel_2pc && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/sentinel_2pc.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/build: src/uhs/twophase/sentinel_2pc/libsentinel_2pc.a

.PHONY : src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/build

src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/clean:
	cd /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/sentinel_2pc && $(CMAKE_COMMAND) -P CMakeFiles/sentinel_2pc.dir/cmake_clean.cmake
.PHONY : src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/clean

src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/depend:
	cd /home/suresh/CBDC/opencbdc-tx/build && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/suresh/CBDC/opencbdc-tx /home/suresh/CBDC/opencbdc-tx/src/uhs/twophase/sentinel_2pc /home/suresh/CBDC/opencbdc-tx/build /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/sentinel_2pc /home/suresh/CBDC/opencbdc-tx/build/src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : src/uhs/twophase/sentinel_2pc/CMakeFiles/sentinel_2pc.dir/depend

